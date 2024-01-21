import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardFooter,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useCardStore from "../../store/cardStore";
import { FormEvent } from "react";

const GetCardForm = () => {

    const { cardToken, setCard } = useCardStore();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const token = e.currentTarget.token.value;
        fetch("/api/get-card", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        }).then((res) => res.json())
        .then((data) => {
            const { card_number = "", ccv = "", expiration_month = "", expiration_year = "", email = "", message = "" } = data;
            if (card_number) {
                setCard({
                    card_number,
                    ccv,
                    expiration_month,
                    expiration_year,
                    email
                });
            } else {
                alert(message);
            }
        });
    }

    const description = cardToken ? `Copie el siguiente token: ${cardToken} y peguelo en el campo de texto`: "Ingrese el token de su tarjeta";

    return (
        <Card className="w-[450px] h-fit">
            <form onSubmit={handleSubmit}>
                <CardHeader>
                    <CardTitle>Decrifrado de Tarjeta</CardTitle>
                    <CardDescription>
                        { description }
                    </CardDescription>
                </CardHeader>
                <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="token">Token</Label>
                                <Input id="token" placeholder="Ingrese el token de su tarjeta" />
                            </div>
                            <Button type="submit">Enviar</Button>
                        </div>
                </CardContent>
                <CardFooter>
                    <span className="text-[12px] text-gray-400">Las tarjeas se eliminan luego de 15 minutos (DynamoDB TTL) </span>
                </CardFooter>
            </form>
        </Card>
    )
};

export default GetCardForm;