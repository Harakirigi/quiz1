import Link from 'next/link';
import Images from './imges';
import styles from './home.module.scss';

export default function Home() {
    return (
        <div className='main'>
            <div className='wrapper'>
                <div className={styles.home}>
                    <Images styles={styles} />
                    <h1>Python: Модуль 1 бойынша викторинаға қош келдіңіздер!</h1>
                    <Link href={'/quiz'}>Викторинаны бастау</Link>
                    <Link href={'/quiz2'}>Тестті бастау</Link>
                </div>
            </div>
        </div>
    );
}