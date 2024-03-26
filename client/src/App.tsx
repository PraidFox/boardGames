import React, {useContext} from 'react';
import {Layout} from 'antd';
import {HeaderComponent} from "./components/Structure/HeaderComponent";
import {LeftMenu} from "./components/Structure/LeftMenu";
import {ContentComponent} from "./components/Structure/ContentComponent";
import {FooterComponent} from "./components/Structure/FooterComponent";
import {UserLoginContext, UserLoginProvider} from "./context/UserContext";
import {AuthOrProfile} from "./components/UiElements/AuthOrProfile/AuthOrProfile";


const {Sider} = Layout;

export const App = () => {
    const {loggedIn} = useContext(UserLoginContext);
    // axiosBGauth.get(`/api/UserProfile`).then(r => console.log(r))

    console.log("isLoggedIn", loggedIn)


    return (
        <UserLoginProvider>
            <Layout style={{minHeight: '100vh'}}>
                <HeaderComponent>
                    <AuthOrProfile/>
                </HeaderComponent>
                <Layout>
                    <Sider
                        //style={{overflow: 'auto', position: 'sticky', top: 64}}
                        collapsible
                    >
                        <LeftMenu/>
                    </Sider>
                    <Layout style={{padding: '10px 10px'}}>
                        <ContentComponent/>
                        <FooterComponent/>
                    </Layout>
                </Layout>
            </Layout>
        </UserLoginProvider>
    );
};

