import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAddContact } from "../services/tanStack";

export default function Form() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ mode: "all" });

  const addContactMutation = useAddContact();

  const handleFormSubmit = (data) => {
    if (!isValid) return;
    addContactMutation.mutate(data);
    history.push("/");
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit(handleFormSubmit)}>
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          type="text"
          {...register("first_name", { required: "Name is required" })}
        />
        <input
          placeholder="Last"
          type="text"
          {...register("last_name", { required: "Last Name is required" })}
        />
      </p>
      <label>
        <span>Email</span>
        <input
          type="text"
          placeholder="@wit.com.tr"
          {...register("email", { required: "Email Address is required" })}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          type="text"
          {...register("avatar", { required: "Avatar is required" })}
        />
      </label>
      {Object.keys(errors).length !== 0 && (
        <ul className="errors">
          {errors.first_name && <li>{errors.first_name.message}</li>}
          {errors.last_name && <li>{errors.last_name.message}</li>}
          {errors.email && <li>{errors.email.message}</li>}
          {errors.avatar && <li>{errors.avatar.message}</li>}
        </ul>
      )}
      <p>
        <button type="submit">Save</button>
        <button
          type="button"
          onClick={() => {
            history.goBack();
          }}
        >
          Cancel
        </button>
      </p>
    </form>
  );
}
