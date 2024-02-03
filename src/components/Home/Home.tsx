import { Divider, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

import styles from "./home.module.css";
import theme from "../../theme";

const Home = () => {
  const navigate = useNavigate();
  const params = useParams();
  const currentRelativeURL = params["*"];
  return (
    <>
      <Grid
        templateAreas={{
          base: `'main'`,
        }}
        templateColumns={{
          base: "1fr",
        }}
      >
        <GridItem area="main">
          <Flex fontSize="lg" justifyContent="space-evenly" paddingBottom={5}>
            <Heading
              onClick={() => navigate("/chats")}
              className={styles.categories}
              style={
                currentRelativeURL === "chats"
                  ? {
                      color: theme.colors.pink[500],
                    }
                  : {}
              }
              as="h2"
              size="md"
            >
              Chats
            </Heading>
            <Heading
              onClick={() => navigate("/friends")}
              className={styles.categories}
              style={
                currentRelativeURL === "friends"
                  ? {
                      color: theme.colors.pink[500],
                    }
                  : {}
              }
              as="h2"
              size="md"
            >
              Friends
            </Heading>
          </Flex>
          <Divider orientation="horizontal" />
        </GridItem>
      </Grid>
      <Outlet />
    </>
  );
};

export default Home;
