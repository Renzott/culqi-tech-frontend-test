import LoginCard from "../../LoginCard";
import styles from "./login.module.css";

export const LoginStep = () => {
    return (
        <div className={styles.loginStep}>
            <LoginCard />
        </div>
    )
}
export default LoginStep;