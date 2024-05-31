import React, { useState } from 'react'
import { useColorMode } from '@chakra-ui/react'
import {

    Box,
    Button,

} from '@chakra-ui/react'
import { product } from '../data/data'
import CustomTable from '../utilities/Table'
import CustomModal from '../utilities/modal'

import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const ProductDetail = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const [openActiveSaleOrder, setOpenActiveSaleOrder] = useState(false);
    const [mode, setMode] = useState();

    const [data, setData] = useState();
    const [allowData, setAllowData] = useState()

    React.useEffect(() => {
        if (mode == "edit") {
            setAllowData(data)
        } else {
            setAllowData(undefined)
        }
    }, [mode])

    const handleAddSaleOrder = () => {
        setOpenActiveSaleOrder(!openActiveSaleOrder);
        setMode("add")
        setAllowData(undefined)
    }

    // fetch('http://localhost:4000/product')
    // .then((res) => res.json())
    // .then((data) => console.log(data))
    // .catch((err) => console.log(err))

    return (
        <>

            <div display={"flex"} justifyContent={"right"}>
                <Button onClick={toggleColorMode} background={"none !important"}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
            </div>

            <Box marginTop="3%" marginLeft="2%" marginRight="2%">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'left', gap: '20px', marginBottom: '10px' }}>
                        <Button size={"sm"} >
                            Active Sale Order
                        </Button>
                        <Button size={"sm"}>
                            Completed Sale Order
                        </Button>
                    </div>
                    <div>
                        <Button size={"sm"} onClick={handleAddSaleOrder}>
                            + Sale Order
                        </Button>
                    </div>
                </div>

                <div>
                    <CustomTable product={product} closeModal={() => setOpenActiveSaleOrder(true)} setData={setData} setMode={setMode} />
                </div>

                {
                    openActiveSaleOrder && <CustomModal isModalOpen={openActiveSaleOrder} closeModal={() => setOpenActiveSaleOrder(!openActiveSaleOrder)} data={allowData} />
                }
            </Box>
        </>

    )
}

export default ProductDetail;