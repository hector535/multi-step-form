import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { formSchema } from "@/lib/zod/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAppContext } from "@/hooks/useAppContext";
import { InputControl } from "@/components/personal-page/input-control/input-control";
import { Container } from "@/components/container/container";
import { NavigationControls } from "@/components/navigation-controls/navigation-controls";
import { FormType } from "@/types";

import style from "./personal-page.module.scss";

export const PersonalPage = () => {
  const navigate = useNavigate();
  const { form, setForm } = useAppContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: {
      name: form.name,
      email: form.email,
      phone: form.phone,
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    setForm(data);
    navigate("/plan");
  };

  return (
    <Container>
      <h1 className="title">Personal info</h1>
      <p className="description">
        Please provide your name, email address, and phone number.
      </p>

      <form
        id="person"
        className={style.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputControl
          label="Name"
          {...register("name")}
          placeholder="e.g. Stephen King"
          errorMessage={errors.name?.message}
        />
        <InputControl
          label="Email Address"
          {...register("email")}
          placeholder="e.g. stephenking@lorem.com"
          errorMessage={errors.email?.message}
        />
        <InputControl
          label="Phone Number"
          {...register("phone")}
          placeholder="e.g. +1 234 567 890"
          errorMessage={errors.phone?.message}
        />
      </form>

      <NavigationControls idForm="person" />
    </Container>
  );
};
