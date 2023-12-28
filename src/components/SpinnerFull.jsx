import styles from './SpinnerFull.module.css';

function SpinnerFull() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // Changed from alignContent
        height: '100vh',
        backgroundColor: '#aaa',
      }}
    >
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
}

export default SpinnerFull;
