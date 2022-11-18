import { Paper, Typography, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import styles from "./Login.module.scss";
import { Navigate } from "react-router-dom";

export const Login = () => {
    const { register, handleSubmit, formState: {errors, isValid} } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onChange",
    });
    const onSubmit = async () => {
    //     const data = await dispatch(fetchLogin(values));
    // if (!data.payload) {return alert("Не удалось авторизоваться!");
    //     }if ("token" in data.payload) 
    //     {
    //       window.localStorage.setItem("token", data.payload.token);
    //     }
    //   };
    
    //   if (isAuth) {
    //     return <Navigate to="/" />;
    }
    return <>
        <Paper  classes={{ root: styles.root }}>
            <Typography classes={{ root: styles.title }} variant="h5">
Login</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    className={styles.field}
                    label="E-Mail"
                    error={Boolean(errors.email?.message)}
                    helperText={errors.email?.message}
                    {...register("email",{ required: "Укажите почту"})} fullWidth/>
                <TextField 
                    type="password"
                    className={styles.field}
                    label="Password" 
                    error={Boolean(errors.email?.message)}
                    helperText={errors.password?.message}
                    {...register("password", { required: "Укажите пароль"})}  fullWidth />
                <Button disabled={!isValid} type="submit" size="large" variant="contained" fullWidth>Sign In</Button></form></Paper>
    </>;
};