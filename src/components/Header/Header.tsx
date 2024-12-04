import cls from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.container}>
        <a href="/" className={cls.link}>
          ToDo
        </a>
      </div>
    </header>
  );
};
