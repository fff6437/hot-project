import React from "react";
import { Formik } from "formik";

const formiks = (props) => {
  const { style, name, isHave, num, loading, error } = props;
  return !isHave ? (
    <Formik
      initialValues={{ [name]: "" }}
      validate={(values) => {
        const errors = {};
        if (!values[name]) {
          errors[name] = "请输入";
        }
        return errors;
      }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
        props.setPlay(values[name], num);
      }}
    >
      {(formProps) => (
        <form
          onSubmit={formProps.handleSubmit}
          className={`${style["battle-form-content"]}`}
        >
          <input
            type="text"
            onChange={formProps.handleChange}
            value={formProps.values[name]}
            name={name}
            placeholder="github username"
          />
          {formProps.errors[name] && (
            <div id={style.feedback}>{formProps.errors[name]}</div>
          )}
          <button type="submit" disabled={loading}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  ) : (
    <div className={`${style["battle-selectInfo"]}`}>
      {error ? (
        <div
          className={`${style["battle-basicInfo"]}`}
          style={{ color: "red" }}
        >
          {error}
        </div>
      ) : (
        <div className={`${style["battle-basicInfo"]}`}>
          <img src={props.img} alt="" />
          <span>{props.player}</span>
        </div>
      )}
      <div
        onClick={() => props.clearPlayer(num)}
        role="button"
        tabIndex={-1}
        onKeyUp={() => {}}
      >
        <i
          className="fa fa-times-circle"
          style={{
            color: "red",
          }}
        />
      </div>
    </div>
  );
};
export default formiks;
