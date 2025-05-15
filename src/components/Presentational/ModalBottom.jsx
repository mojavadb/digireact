import styles from './ModalBottom.module.css'

function ModalBottom({children, content, isOpen, setIsOpen}) {

  return (
    <div>
      <div onClick={() => setIsOpen(true)}>{children}</div>
      
      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            {content}
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalBottom
