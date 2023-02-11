import { card } from '../assets';
import styles, { layout } from '../style'
import Button from "./Button"
const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" />in few steps .
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
        lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
        lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
        lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={`${layout.sectionImg} z-[4] relative`}>
      <img src={card} alt="Card" className={`
w-[100%] h-[100%] `} />
      <div className="absolute z-[3]  -left-0 top-0 w-[50%] h-[50%] rounded-full pink__gradient " />
      <div className="absolute z-[0] -left-0 bottom-0 w-[50%] h-[50%] rounded-full blue__gradient " />
      <div className="absolute z-[1] -right-0 top-0 w-[50%] h-[50%] rounded-full blue__gradient " />
       <div className="absolute z-[1] -right-0 top-0 w-[50%] h-[50%] rounded-full blue__gradient " />

    </div>
  </section>
)



export default CardDeal