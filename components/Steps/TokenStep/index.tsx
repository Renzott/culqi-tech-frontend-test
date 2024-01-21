import styles from "./token.module.css";
import { TokenCreditCard } from "../../TokenCreditCard";
import { CreditCard } from "../../CreditCard";

const TokenStep = () => {

    return (
        <div className={styles.tokenStep}>
            <div className={styles.tabToken}>
                <TokenCreditCard />
                <div className="w-full h-fit flex flex-col justify-center items-center bg-orange-100 rounded-xl py-6">
                <CreditCard />
                </div>
            </div>
        </div>
    )

}

export default TokenStep;