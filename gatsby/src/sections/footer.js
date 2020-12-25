import React from "react"
import styles from "../styles/components/_footer.module.scss"

const socials = [
  { href: "https://facebook.com/7UP", icon: "fab fa-facebook-f" },
  { href: "https://www.pinterest.com/7up", icon: "fab fa-pinterest" },
  { href: "https://instagram.com/7up", icon: "fab fa-instagram" },
  { href: "https://twitter.com/7up", icon: "fab fa-twitter" },
  { href: "https://youtube.com/user/7UP", icon: "fab fa-youtube" },
]
const resources = [
  {
    href: "https://www.keurig.com/content/privacy-policy?showContentOnly=1",
    text: "Privacy Policy",
  },
  {
    href: "https://www.keurigdrpepper.com/",
    text: "Do Not Sell My Personal Information",
  },
  { href: "https://www.keurigdrpepper.com/", text: "Terms of Use" },
  {
    href: "https://www.keurigdrpepper.com/en/term-of-use",
    text: "Accessibility",
  },
  { href: "https://www.keurigdrpepper.com/en/contact-us", text: "Contact" },
  {
    href:
      "https://dpsgproductinfo.egain.cloud/system/templates/selfservice/DPSWSS/help/customer/locale/en-US/portal/303400000001001",
    text: "FAQ",
  },
  { href: "https://careers.keurigdrpepper.com/", text: "Careers" },
  { href: "https://www.letsplay.com/", text: "Let's Play" },
]

export default function Footer() {
  return (
    <section className={styles.sectionFooter}>
      <footer>
        <div className={styles.navBox}>
          <nav>
            <ul className={styles.socials}>
              {socials.map(({ href, icon }, i) => (
                <a href={href} key={i} target="_blank">
                  <i className={icon}></i>
                </a>
              ))}
            </ul>
            <ul className={styles.resources}>
              {resources.map(({ href, text }, i) => (
                <a href={href} key={i} target="_blank">
                  {text}
                </a>
              ))}
            </ul>
          </nav>
          <p className={styles.credit}>
            7UP and DO MORE WITH 7UP are trademarks of Dr Pepper/Seven Up, Inc.
            © 2020 Dr Pepper/Seven Up, Inc.
          </p>
        </div>
      </footer>
    </section>
  )
}
