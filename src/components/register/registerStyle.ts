import styled from "styled-components";
import 'react-toastify/dist/ReactToastify.min.css'

export const Div = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 32px;
    margin-top: 300px;
    margin-bottom: 100px;
    
    .back {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        max-width: 400px;

        a {
            background-color: var(---grey-3);
            color: var(---grey-0);
            padding: 10px 20px;
            border-radius: 4px;
        }
    }
    
    h1 {
        color: var(---color-primary);
    }

    form {
        background-color: var(---grey-3);
        width: 90%;
        max-width: 400px;
        padding: 40px 0px;
        color: var(---grey-0);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 70px;
        border-radius: 4px;
        margin-bottom: 200px;
    }

    .login {
        display: flex;
        flex-direction: column;
        gap: 40px;
        width: 90%;
    }

    .DivInput {
        display: flex;
        flex-direction: column;
        position: relative;
        gap: 16px;
        color: var(---grey-0);
    
        p {
            position: absolute;
            right: 0;
            bottom: 60px;
            transform: scale(0);
            padding: 10px;
            transition: 0.5s;
            border-radius: 8px;
            border: 2px solid rgb(200, 30, 60);
        }

        .alert {
            color: rgb(200, 30, 60);
            font-size: 22px;
            position: absolute;
            bottom: 15px;
            right: 15px;
        }

        .alert:hover ~ p {
            color: rgb(200, 30, 60);
            background-color: var(---grey-2);
            transform: scale(1);
            transition: 0.5s;
        }


        input {
            background-color: var(---grey-2);
            height: 50px;
            padding: 0px 16px;
            outline: none;
            border: 2px solid var(---grey-0);
            border-radius: 4px;
            color: var(---grey-0);
            font-size: 16px; 
        }

        label {
            position: relative;
        }

        label[title]:hover::after{
            border: 2px solid var(---grey-0);
            padding: 10px;
            content: attr(title);
            position: absolute;
            left: 50%;
            bottom: 0px;
        }

        select {
            height: 50px;
            background-color: var(---grey-2);
            color: var(---grey-0);
            padding: 0px 10px;
            font-size: 1rem;
            border: 2px solid var(---grey-0);
        }
    }

    button {
        background-color: var(---color-primary);
        height: 40px;
        border-radius: 4px;
        color: var(---grey-0);
        font-weight: 600;
        font-size: 16px;
    }

    .register {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 90%;
        
        span {
            color: var(---grey-1);
            align-self: center;
            font-size: 12px;
        }

        button {
            background-color: var(---grey-1);
        }
    }

`