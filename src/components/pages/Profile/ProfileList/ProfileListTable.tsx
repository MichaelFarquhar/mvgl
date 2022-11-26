import { FC } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaPencilAlt } from "react-icons/fa";

interface Data {
  id: number;
  title: string;
  score: number;
  date_added: Date;
}

interface Props {
  tableData: Data[] | [];
}

export const ProfileListTable: FC<Props> = ({ tableData }) => {
  const tableRowHover = useColorModeValue("gray.100", "gray.700");

  return (
    tableData && (
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Game Title</Th>
              <Th>Score</Th>
              <Th>Date Added</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map((data, index) => (
              <Tr key={index} _hover={{ bg: tableRowHover, cursor: "pointer" }}>
                <Td>{index + 1}</Td>
                <Td>{data.title}</Td>
                <Td textAlign="center">{data.score}</Td>
                <Td textAlign="center">
                  {data.date_added.toLocaleDateString()}
                </Td>
                <Td>
                  <FaPencilAlt />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    )
  );
};
