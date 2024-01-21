import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormEvent } from "react"
import useTokenStore from "../../store/tokenStore"
import useStepStore from "../../store/stepStore"

const LoginCard = () => {

    const { setToken } = useTokenStore();
    const { setStep } = useStepStore();

    const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        const password = e.currentTarget.password.value;

        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                const { token = "", message = "" } = data;
                if (token) {
                    setToken(token);
                    setStep(1);
                } else {
                    alert(message);
                }
            });
    }

    return (
        <Card className="w-[450px] h-fit">
            <form onSubmit={handleLoginSubmit}>
                <CardHeader>
                    <CardTitle>Inicio de Sesion</CardTitle>
                    <CardDescription>
                        Ingrese sus credenciales para continuar
                    </CardDescription>
                </CardHeader>
                <CardContent>

                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="username">Usuario</Label>
                            <Input id="username" placeholder="Nombre de Usuario" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Contraseña</Label>
                            <Input id="password" placeholder="Contraseña" type="password" />
                        </div>
                    </div>

                </CardContent>
                <CardFooter className="flex justify-between">
                    <span className="text-sm text-gray-400">Cada nuevo login genera un nuevo token</span>
                    <Button>Login</Button>
                </CardFooter>
            </form>
        </Card>
    )
}

export default LoginCard;