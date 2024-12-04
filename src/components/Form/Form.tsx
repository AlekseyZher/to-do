import cls from "./Form.module.scss";

export const Form = () => {
  return (
    <div className={cls.wrapper}>
      <form action="/">
        <label>
          <input type="text" className={cls.input} />
          <button className={cls.button}></button>
        </label>
      </form>
    </div>
  );
};
