import {NavLink} from "react-router";
import {PathStorage} from "../../../tools/storages/Path.storage.ts";
import {useGetFilterUsers} from "../../../tools/hooks/queries/Users.queries.ts";
import {useState} from "react";
import {Form, Input, Pagination, PaginationProps} from "antd";
import {useDebounceFN} from "../../../tools/hooks/useDebounceFN.ts";


export const AllUsersPage = () => {
    const [valuesPagination, setValuesPagination] = useState<[number, number]>([1, 10])
    const [userName, setUserName] = useState<string>()


    const debouncedChangeFilter = useDebounceFN(setUserName, 1000)
    const {data: users} = useGetFilterUsers({userNameSearch: userName, page: valuesPagination[0], pageSize: valuesPagination[1]})

    const changePagination: PaginationProps['onChange'] = (current, pageSize) => {
        window.scrollTo(0, 0)
        setValuesPagination([current, pageSize]);
    };

    return (
        <div>
            <Form
                name="filterUsers"
                initialValues={{remember: true}}
                layout={'inline'}
                variant={'filled'}
            ></Form>
            <Form.Item
            >
                <Input
                    onInput={e => debouncedChangeFilter(e.currentTarget.value)}
                    placeholder={'Введите имя пользователя'}
                ></Input>
            </Form.Item>

            Здесь информация и поиск всех игроков.
            <br/>
            {users && users.length < 1 && <span style={{color: 'red'}}>ой, а пользователей то нет!!</span>}
            {users?.map(user =>
                <li key={"link" + user.userName}>

                    <NavLink
                        to={`${PathStorage.USER}/${user.userName}`}
                    >
                        {user.userName}
                    </NavLink>
                    <br/>
                    Роли: {user.roles.join(', ')}
                </li>
            )}
            {users &&
                <Pagination
                    onChange={changePagination}
                    current={valuesPagination[0]}
                    align="center"
                    total={20}
                    pageSizeOptions={[10, 30, 50]}
                    pageSize={valuesPagination[1]}
                />
            }
            <br/>
            Зачем? Найти друга. Или найти с кем поиграть, может сделаем отправки сообщений? Или еще чего... Или
            посмотреть активность.
            <br/>
            А компании могут ммм... не знаю зачем им, но может нужно будет.
        </div>
    )
}