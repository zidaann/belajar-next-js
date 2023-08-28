import styles from '@/styles/Home.module.css'
export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <h1 className='text-3xl'>Ini Halaman Home</h1>
        <p style={{ color: 'red', border: '1px solid salmon', padding: '5px', borderRadius: '8px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur error omnis quaerat ex corporis perferendis, neque tempora.</p>
      </div>
    </>
  )
}
