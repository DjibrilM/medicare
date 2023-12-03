import TitrePage from "../components/TitrePage";
import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export default function LoginPage() {
    return (
        <div className=" p-10">
        <TitrePage/>
        <div className=" bg-orange-100 p-20 rounded-3xl">
            <Card color="transparent" shadow={false} className="w-1/2 p-4 mx-auto text-center bg-blue-gray-50">
                <Typography variant="h4" color="blue-gray" className="">
                    Sign Up
                </Typography>
            <form className="mt-8 mb-2 max-w-screen-lg sm:w-96 w-1/2 p-4 mx-auto text-center">
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Name
                    </Typography>
                    <Input
                        crossOrigin
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Email
                    </Typography>
                    <Input
                        crossOrigin
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Password
                    </Typography>
                    <Input
                        crossOrigin
                        type="password"
                        size="lg"
                        placeholder="********"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                </div>
                <Button className="mt-6" fullWidth>
                    sign up
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Already have an account?{" "}
                    <a href="#" className="font-medium text-gray-900">
                        Sign In
                    </a>
                </Typography>
            </form>
            </Card>
        </div>
        </div>
    );
  }