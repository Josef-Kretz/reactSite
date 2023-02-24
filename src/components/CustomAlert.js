import { Alert } from "react-bootstrap";
import { useState, useEffect } from 'react'

const CustomAlert = ({alert}) => {
    const [show, setShow] = useState(false)
    
    const handleClose = () => {
        if(alert){
            alert.message = ''
            alert.success = ''
        }
        setShow(false)
    }

    useEffect( () => {
        if(!show && alert) setShow(true)

        const timer = setTimeout(() => {
            handleClose()
          }, 5000)

        return () => clearTimeout(timer)
    }, [alert])

    return <Alert className='alertCon' show={show} variant={alert.success ? 'success' : 'warning'} dismissible={true} onClose={handleClose}>
        <p style={{ whiteSpace: 'pre-line' }}>{alert.message}</p>
    </Alert>
}

export default CustomAlert