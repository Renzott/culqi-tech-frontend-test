//getCardStep
import { CreditCard } from '../../CreditCard';
import GetCardForm from '../../GetCardForm';
import styles from './getCard.module.css';

export const GetCardStep = () => {
    
    return (
        <div className={styles.getCardStep}>
            <div className={styles.tabCard}>
                <GetCardForm />
                <CreditCard />
            </div>
        </div>
    )

}
export default GetCardStep;