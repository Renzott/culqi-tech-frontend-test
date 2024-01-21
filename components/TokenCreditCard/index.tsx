import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import useCardStore from "../../store/cardStore"
import { FormEvent, useState } from "react"
import { isValidator } from "./validator"
import useStepStore from "../../store/stepStore"
import { Card as CardModel } from "../../services/models/Card"
import { getToken } from "../../lib/localStorage"

export const TokenCreditCard = () => {

    const { setCardData, setCard, setCardToken } = useCardStore();
    const { setStep } = useStepStore();

    const [error, setError] = useState("");

    const handleInput = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, value } = e.currentTarget;
        setCardData(name, value);
    }

    const submitCard = (card: CardModel) => {

        const token = getToken();

        fetch("/api/tokenization", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(card),
        })
            .then((res) => res.json())
            .then((data) => {
                const { token = "", message = "" } = data;
                if (token) {
                    setError("");
                    setCardToken(token);
                    setCard({
                        card_number: 0,
                        ccv: 0,
                        expiration_month: "",
                        expiration_year: "",
                        email: ""
                    });
                    setStep(2);
                } else {
                    setError(message);
                }
            });
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const card_number = e.currentTarget.card_number.value;
        const ccv = e.currentTarget.ccv.value;
        const expiration_month = e.currentTarget.expiration_month.value;
        const expiration_year = e.currentTarget.expiration_year.value;
        const email = e.currentTarget.email.value;

        const cardData = {
            card_number,
            ccv,
            expiration_month,
            expiration_year,
            email
        }

        const error = isValidator(cardData);
        if (!error) {
            submitCard(cardData);
        } else {
            setError(error);
        }

    }

    return (
        <Card className="w-[550px] h-fit py-6">
            <form onSubmit={handleSubmit}>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="Correo Electronico" name="email" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <div className="flex space-x-1.5">
                                <div className="flex flex-col space-y-1.5 w-full">
                                    <Label htmlFor="card_number">Numero de Tarjeta</Label>
                                    <Input id="card_number" placeholder="Numero de Tarjeta" name="card_number" onInput={handleInput} />
                                </div>
                                <div className="flex flex-col space-y-1.5 w-[100px]">
                                    <Label htmlFor="ccv">CCV</Label>
                                    <Input id="ccv" placeholder="CCV" name="ccv" onInput={handleInput} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1.5 w-full">
                            <div className="flex space-x-1.5">
                                <div className="flex flex-col space-y-1.5 w-[50%]">
                                    <Label htmlFor="expiration_month">Mes de Expiracion</Label>
                                    <Input id="expiration_month" placeholder="Mes de Expiracion" name="expiration_month" onInput={handleInput} />
                                </div>
                                <div className="flex flex-col space-y-1.5 w-[50%]">
                                    <Label htmlFor="expiration_year">Año de Expiracion</Label>
                                    <Input id="expiration_year" placeholder="Año de Expiracion" name="expiration_year" onInput={handleInput} />
                                </div>
                            </div>
                        </div>
                        <Button type="submit">Submit</Button>
                    </div>
                </CardContent>
                <CardFooter className={error ? "flex justify-start" : "hidden"}>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                </CardFooter>
            </form>

        </Card>
    )
}