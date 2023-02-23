import { Alert } from "react-bootstrap";
import { useState, useEffect } from 'react'

const CustomAlert = ({alert}) => {
    const [show, setShow] = useState(false)

    const handleClose = () => {
        setShow(false)
    }

    useEffect( () => {
        if(!show && alert.message) setShow(true)

        const timer = setTimeout(() => {
            handleClose()
          }, 3000)

        return () => clearTimeout(timer)
    }, [])

    return <Alert className='alertCon' show={show} variant={alert.success ? 'success' : 'warning'} dismissible={true} onClose={handleClose}>
        <p style={{ whiteSpace: 'pre-line' }}>{alert.message}</p>
    </Alert>
}

export default CustomAlert