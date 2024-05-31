import React, { useEffect } from 'react';

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
    Menu,
    MenuButton,
    IconButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'

import { EditIcon, ViewIcon } from '@chakra-ui/icons'


function CustomTable(props) {

    const { product, closeModal, setData, setMode } = props;

    const editviewIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
    </svg>


const handleEdit = (value) => {
    closeModal();
    setData(value);
    setMode("edit");
}


    return (
        <>
            <TableContainer style={{ border: '1px solid #E2E8F0', padding: '0.75rem', borderRadius: '12px' }}>
                <Table size='sm' variant="simple">
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Customer Name</Th>
                            <Th>Price</Th>
                            <Th>Last Modified</Th>
                            <Th>Edit/View</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            product.map((item, inx) => {
                                return (
                                    <Tr key={inx} >
                                        <Td>{item.id}</Td>
                                        <Td>{item.name}</Td>
                                        <Td>{item?.price}</Td>
                                        <Td>{item.updated_on}</Td>

                                        <Td> <Menu>
                                            <MenuButton
                                                as={IconButton}
                                                icon={editviewIcon}
                                                background={"none !important"}

                                            />
                                            <MenuList>
                                                <MenuItem icon={<EditIcon />} onClick={() => handleEdit(item)}>
                                                    Edit
                                                </MenuItem>
                                                <MenuItem icon={<ViewIcon />} >
                                                    View
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                        </Td>
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default CustomTable