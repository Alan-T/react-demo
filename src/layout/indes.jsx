import styles from './base.module.less';
import React from 'react';

function BaseLayout() {
    return (
        <div class={styles.container}>
            <aside class={styles.sidebar}>
                ...
            </aside>
            <main class={styles.main}>
                ...
            </main>
        </div>
    );
}

export default BaseLayout;
