import {
  Box,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, KeyboardEvent } from "react";
import { FaSearch } from "react-icons/fa";
import { GameSearchItem } from "./GameSearchItem";

import jsonData from "../../../GameResult.json";
import { PageContainer } from "../../layouts";
console.log(jsonData);

export const GameSearch = () => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState<Object[]>(jsonData);

  const search = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    const params = {
      search: input,
      key: process.env.REACT_APP_API_KEY,
    };

    axios
      .get("https://api.rawg.io/api/games", {
        params: params,
      })
      .then((resp) => {
        setSearchResults(resp.data.results);
        console.log(resp.data.results);
      });
  };

  return (
    <Box>
      <PageContainer>
        <h1>Search Games</h1>
        <VStack spacing={6}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FaSearch color="gray.300" />}
            />
            <Input
              type="text"
              name="search"
              id="search"
              placeholder="Enter game title"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => search(e)}
            />
          </InputGroup>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
          >
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              {searchResults &&
                searchResults?.map((item, index) => (
                  <GridItem>
                    <GameSearchItem item={item} key={index} />
                  </GridItem>
                ))}
            </Grid>
          </VStack>
        </VStack>
      </PageContainer>
    </Box>
  );
};
