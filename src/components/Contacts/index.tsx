import React from 'react';

import { Main } from '../index';

import styles from './index.module.scss';

const Contacts = () => (
  <div className={styles.contacts}>
    <Main>
      <div className={styles.contacts__column}>
        <h5 className={styles.contacts__title}>Адрес</h5>
        <p className={styles.contacts__text}>г.Гродно</p>
      </div>
      <div className={styles.contacts__column}>
        <h5 className={styles.contacts__title}>Контакты</h5>
        <a href='tel:+375292832023' className={styles.contacts__link}>+375-29-283-20-23 Виктор</a>
        <a href='tel:375336744614' className={styles.contacts__link}>+375-33-674-46-14 Марина</a>
      </div>
      <div className={styles.contacts__column}>
        <h5 className={styles.contacts__title}>Время работы</h5>
        <p className={styles.contacts__text}>Ежедневно</p>
        <p className={styles.contacts__text}>9:00-21:00</p>
      </div>
      <div className={styles.contacts__column}>
        <h5 className={styles.contacts__title}>Месенджеры</h5>
        <div className={styles.contacts__line}>
          <a className={styles.contacts__social} href='tel:+375292832023'>
           <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="3.62 4.48 49.25 49.25"><path d="M28.241 4.484c-13.6 0-24.625 11.024-24.625 24.623 0 13.6 11.025 24.625 24.625 24.625 13.599 0 24.624-11.025 24.624-24.625S41.84 4.484 28.241 4.484zm-1.153 13.008c.2-.183.341-.209 1.037-.188.362.013.896.056 1.186.09 1.467.183 2.653.538 3.954 1.173 1.28.627 2.098 1.22 3.182 2.3 1.015 1.019 1.578 1.79 2.175 2.99.832 1.672 1.306 3.66 1.387 5.848.03.746.008.912-.162 1.126-.324.413-1.037.345-1.28-.12-.077-.153-.098-.285-.124-.883-.042-.917-.106-1.51-.234-2.218-.504-2.777-1.834-4.995-3.959-6.586-1.77-1.33-3.6-1.98-5.997-2.12-.81-.047-.951-.077-1.135-.217-.341-.27-.358-.9-.03-1.195zm5.085 5.494c-.858-.512-2.124-.891-3.28-.985-.419-.034-.649-.12-.807-.303a.777.777 0 0 1-.064-.964c.222-.345.563-.4 1.583-.247 2.59.38 4.594 1.582 5.908 3.536.738 1.1 1.199 2.393 1.356 3.78.056.507.056 1.433-.004 1.586a.97.97 0 0 1-.388.422c-.166.086-.52.077-.717-.025-.328-.167-.426-.431-.426-1.148 0-1.105-.286-2.269-.781-3.173a6.483 6.483 0 0 0-2.38-2.479zm1.442 5.686c-.252.23-.717.24-.999.022-.204-.154-.268-.316-.315-.755-.056-.585-.158-.994-.333-1.374-.375-.806-1.036-1.224-2.154-1.36-.525-.064-.683-.124-.853-.325a.795.795 0 0 1 .239-1.194c.162-.081.23-.09.588-.068.222.012.55.05.726.09.84.178 1.484.498 2.034 1.014.708.67 1.097 1.48 1.267 2.645.115.76.068 1.058-.2 1.305zm6.372 11.206c-.315.815-1.544 2.342-2.401 2.995-.776.588-1.327.814-2.052.849-.597.03-.844-.022-1.608-.337-5.99-2.47-10.77-6.156-14.567-11.219-1.984-2.645-3.494-5.387-4.526-8.233-.602-1.659-.631-2.38-.137-3.229.214-.358 1.122-1.245 1.783-1.74 1.101-.82 1.609-1.122 2.014-1.207.277-.06.76-.013 1.066.098.15.05.38.17.512.256.81.537 3.067 3.425 3.805 4.867.422.823.563 1.433.43 1.885-.136.486-.362.742-1.373 1.557-.405.329-.785.666-.844.755-.154.222-.277.657-.277.964.004.713.465 2.005 1.07 2.999.47.772 1.31 1.762 2.141 2.521.977.896 1.839 1.506 2.812 1.988 1.25.622 2.013.78 2.572.52.14-.064.29-.15.337-.188.042-.038.37-.439.73-.882.69-.87.848-1.011 1.321-1.173.602-.205 1.216-.15 1.835.166.469.243 1.493.879 2.154 1.34.87.61 2.73 2.128 2.982 2.43.443.547.52 1.246.221 2.018z"/></svg>
          </a>
          <a className={styles.contacts__social} href="https://telegram.me/+375292832023">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 20 20"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83.013-.007.87 2.87c.112.311.266.367.453.341.188-.025.287-.126.41-.244l1.188-1.148 2.55 1.888c.466.257.801.124.917-.432l1.657-7.822c.183-.728-.137-1.02-.702-.788l-9.733 3.76c-.664.266-.66.638-.12.803l2.497.78z"/></svg>
          </a>
          <a className={styles.contacts__social} href="viber://chat?number=375292832023">
          <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 512 512"><path d="M256 0c141.29 0 256 114.71 256 256 0 141.29-114.71 256-256 256C114.71 512 0 397.29 0 256 0 114.71 114.71 0 256 0Zm121.527 134.844c-30.646-30.672-71.401-47.571-114.822-47.588-89.468 0-162.284 72.788-162.319 162.256-.012 28.599 7.462 56.516 21.666 81.122L99.024 414.72l86.048-22.564c23.708 12.927 50.401 19.739 77.568 19.751h.067c89.459 0 162.281-72.797 162.317-162.266.017-43.358-16.851-84.127-47.497-114.797ZM262.706 384.501h-.054c-24.209-.01-47.953-6.511-68.667-18.799l-4.927-2.924-51.061 13.391 13.629-49.769-3.208-5.102c-13.505-21.473-20.637-46.293-20.627-71.776.03-74.362 60.552-134.861 134.969-134.861 36.035.014 69.908 14.062 95.38 39.554 25.472 25.493 39.492 59.379 39.478 95.416-.03 74.367-60.551 134.869-134.912 134.87Zm74.003-101.01c-4.056-2.029-23.996-11.838-27.715-13.191-3.717-1.353-6.42-2.03-9.124 2.029-2.704 4.059-10.477 13.192-12.843 15.898-2.365 2.705-4.731 3.045-8.787 1.014-4.056-2.028-17.124-6.31-32.615-20.124-12.057-10.75-20.197-24.029-22.563-28.087-2.365-4.059-.252-6.253 1.779-8.275 1.824-1.816 4.055-4.735 6.083-7.103 2.028-2.368 2.704-4.059 4.056-6.764 1.352-2.707.676-5.074-.338-7.104-1.014-2.029-9.125-21.986-12.505-30.104-3.291-7.906-6.635-6.836-9.125-6.96-2.363-.118-5.069-.143-7.773-.143-2.704 0-7.097 1.015-10.816 5.074-3.717 4.059-14.194 13.868-14.194 33.824 0 19.957 14.533 39.236 16.561 41.943 2.028 2.706 28.599 43.659 69.284 61.221 9.676 4.177 17.231 6.672 23.121 8.541 9.716 3.085 18.557 2.65 25.546 1.606 7.792-1.164 23.996-9.809 27.375-19.279 3.379-9.471 3.379-17.589 2.366-19.28-1.014-1.691-3.718-2.706-7.773-4.736Z"/></svg>
          </a>
        </div>
      </div>
    </Main>
  </div>
);

export default Contacts;
