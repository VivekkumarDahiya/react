import styles from "./footer.module.css";


const Footer=()=>{
    return(
     <footer>
         <footer className={styles.footer_container}>
      <div className={styles.footer_content}>
        <div className={styles.footer_left}>
          <p>Build with ❤️ using React</p>
        </div>

       
      </div>
      <div className={styles.footer_copy}>
        © 2026 React App. All rights reserved.
      </div>
    </footer>
     </footer>
    )
}

export default Footer;