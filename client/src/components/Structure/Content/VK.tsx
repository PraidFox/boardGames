import * as VKID from '@vkid/sdk';
import {Scheme} from "@vkid/sdk";
import {useEffect, useLayoutEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Button} from "antd";

VKID.Config.set({
    app: 51861192,
    redirectUrl: "http://localhost:3000/VK"
})
export const VK = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const payload = searchParams.get('payload');

        console.log(payload)
        if (payload) {
            navigate('/', {replace: true});
        }
    }, [location, navigate]);

    useLayoutEffect(() => {
        const oneTap = new VKID.OneTap();
        const container = document.getElementById('VkIdSdkOneTap');

        if (container) {
            oneTap.render({
                container: container,
                scheme: Scheme.LIGHT
            });
        }
    }, []);

    return (
        <div>

            {/*<Button onClick={vkAuth}>Кнопка</Button>*/}
            <div id="VkIdSdkOneTap">VK</div>
        </div>
    )
}