import React, { useState } from 'react'
import {
    Modal,
    Button,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    ModalFooter
} from '@chakra-ui/react'
import { product } from '../data/data';

function CustomModal(props) {

    const { isModalOpen, closeModal, data } = props;


    const idRef = React.useRef(null)
    const nameRef = React.useRef(null)
    const priceRef = React.useRef(null)


    const handleFormData = () => {
        const formid = idRef.current.value;
        const formname = nameRef.current.value;
        const formprice = priceRef.current.value;


        if (data == undefined || data == [] && formid != "" && formname != "" && formprice != "") {
            const obj = { "id": formid, "name": formname, "price": formprice, "updated_on": Date() }
            product.push(obj)
        } else {
            const getProduct = product.filter((item, index) => item.id == formid)

            getProduct[0].name = formname;
            getProduct[0].price = formprice;
            getProduct[0].updated_on = Date();
            product.pop(formid)
            console.log(getProduct)
            product.push(getProduct[0])
        }
        closeModal()
    }

    return (
        <>

            <form>
                <Modal
                    initialFocusRef={idRef}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                >
                    <ModalOverlay
                        bg='none'
                        backdropFilter='auto'
                        backdropInvert='80%'
                        backdropBlur='2px'
                    />
                    <ModalContent>
                        <ModalHeader>Add Sale Order</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            {
                                <FormControl>
                                    <FormLabel>Id</FormLabel>
                                    <Input ref={idRef} placeholder='Id' size={"sm"} name='id' id='id' defaultValue={data != undefined ? data.id : ""} disabled={data != undefined} />
                                </FormControl>
                            }
                            <FormControl mt={4}>
                                <FormLabel>Customer Name</FormLabel>
                                <Input ref={nameRef} placeholder='Customer Name' size={"sm"} name='name' id='name' defaultValue={data != undefined ? data.name : ""} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Price</FormLabel>
                                <Input ref={priceRef} placeholder='Price' size={"sm"} name='price' id='price' defaultValue={data != undefined ? data.price : ""} />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} size={"sm"} onClick={handleFormData}>
                                Save
                            </Button>
                            <Button onClick={closeModal} size={"sm"}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </form>
        </>
    )
}

export default CustomModal;