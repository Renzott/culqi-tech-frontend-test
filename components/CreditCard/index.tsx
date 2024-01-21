import useCardStore from "../../store/cardStore"

export const CreditCard = () => {

    const { card } = useCardStore();

    const formatExpirationDate = (expiration_month: string, expiration_year: string) => {
        const month = expiration_month ? expiration_month.padStart(2, "0") : "";
        const year = expiration_year ? expiration_year.slice(-2) : "";
        
        if (month && year) {
            return `${month}/${year}`;
        }
        return "MM/YY";
    }

   
    return (
        <div className="w-[450px] h-fit py-[40px] bg-gray-100 rounded-md shadow-md px-6">
            <div className="flex justify-between">
                <div className="flex flex-col space-y-1">
                    <span className="text-sm text-gray-400">Card Number</span>
                    <span className="text-lg text-gray-700"> {card.card_number ? card.card_number : "**** **** **** ****"}</span>
                </div>

            </div>
            <div className="flex justify-between mt-6">
                <div className="flex flex-col space-y-1">
                    <span className="text-sm text-gray-400">Expiration Date</span>
                    <span className="text-lg text-gray-700">{formatExpirationDate(card.expiration_month, card.expiration_year)}</span>
                </div>
                <div className="flex flex-col space-y-1">
                    <span className="text-sm text-gray-400">CVV</span>
                    <span className="text-lg text-gray-700">{card.ccv ? card.ccv : "***"}</span>
                </div>
            </div>
        </div>
    )
}