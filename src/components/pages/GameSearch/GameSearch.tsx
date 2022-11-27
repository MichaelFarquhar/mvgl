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
import { useState, KeyboardEvent, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { GameSearchItem } from "./GameSearchItem";

import jsonData from "../../../GameResult.json";
import { PageContainer } from "../../layouts";
import { useSearchParams } from "react-router-dom";
console.log(jsonData);

export const GameSearch = () => {
  const [searchResults, setSearchResults] = useState<Object[]>(jsonData);

  const [queryParams, setQueryParams] = useSearchParams();
  const queryString = queryParams.get("q");

  // Performs searches based on query string in URL
  useEffect(() => {
    if (queryString !== "" && queryString !== null) console.log("running api");
  }, [queryString]);

  const search = () => {
    const params = {
      search: queryString,
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
              onKeyDown={(e) => {
                if (e.key === "Enter")
                  setQueryParams({ q: e.currentTarget.value });
              }}
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
                  <GridItem key={index}>
                    <GameSearchItem item={item} />
                  </GridItem>
                ))}
            </Grid>
          </VStack>
        </VStack>
      </PageContainer>
    </Box>
  );
};
