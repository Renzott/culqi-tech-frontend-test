import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import styles from "./navigator.module.css"
import { MouseEventHandler } from "react";
import useStepStore from "@/store/stepStore";

const TokenCard = () => {

    const { step, setStep } = useStepStore();

    const handleTabClick = (e: string ) => {
        setStep(Number(e));
    }

    return (
        <div className={styles.navigatorContainer}>
            <Tabs value={String(step)} defaultValue="0" className={styles.tabContainer} onValueChange={handleTabClick}>
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="0">Login</TabsTrigger>
                    <TabsTrigger value="1">Encriptar Tarjeta</TabsTrigger>
                    <TabsTrigger value="2">Obtener Tarjeta</TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    )

};

export default TokenCard;