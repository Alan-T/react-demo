import styles from './base.module.less';
import React from 'react';

function BaseLayout() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h2>Webpack Demo</h2>
            </header>
            <main>
                <div className={styles.content}>
                    <ul>
                        <li>
                            Webpack
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            Less
                        </li>
                    </ul>
                </div>
                <div className={styles.footer}>
                    © 2019-2021 Alan.
                    All rights reserved
                </div>
            </main>
        </div>
    );
}

export default BaseLayout;
