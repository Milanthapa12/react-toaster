import React, {useState, useCallback} from "react";
import Toaster from "../components/Toaster"
import {v4 as uuidv4} from "uuid";
import { PositionType, ToasterProps, UseToasterReturn } from "../components/types";


const useToaster = (
    position: PositionType = "bottom-right"
): UseToasterReturn => {
    const [notifications, setNotification] = useState<(ToasterProps & {id: string})[]>([]);



const triggerToast = useCallback( (toasterProps: ToasterProps) => {
    const toastId = uuidv4();
    setNotification( (prevNotifications) => [
        ...prevNotifications,
        {id: toastId, ...toasterProps}
    ]);

    setTimeout( () => {
        setNotification( (prevNotifications) => prevNotifications.filter( (ntf) => ntf.id !== toastId));
    }, toasterProps.duration);
},
[]
);

const handleToasterClose = (index: number) => {
    setNotification((prevNotifications)=> {
        const updateNotifications = [...prevNotifications];
        updateNotifications.splice(index, 1);
        return updateNotifications;
    })
}

const ToasterComponent = (
    <div className={`notification-content ${position} ${position.split("-")[0]}`}>
        {
            notifications.map((notification, index) => (
                <Toaster key={notification.id}
            {...notification}
            onClose={() => handleToasterClose(index)}
            />))
        }
    </div>
);

return {ToasterComponent, triggerToast}

};

export default useToaster;