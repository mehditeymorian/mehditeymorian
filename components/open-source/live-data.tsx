import * as React from "react";
import { useState, useEffect } from "react";
import useFetch from "use-http";
import { SimpleGrid, Box, useMediaQuery } from "@chakra-ui/react";
import { PageSlideFade } from "../ui/page-transitions";
import RepositoryCard from "./live-data-card";
import StackGrid from "react-stack-grid";
import CardSkeleton from "./card-skeleton";

const LiveData = () => {
  const { get, loading, error, data } = useFetch("https://api.github.com");
  const [repos, setRepos] = useState([]);
  const [isLargerThan720] = useMediaQuery("(min-width: 720px)");
  const [isLargerThan982] = useMediaQuery("(min-width: 982px)");

  let columnWidth = 390;
  if (isLargerThan982) {
    columnWidth = 390;
  } else {
    if (isLargerThan720) {
      columnWidth = 300;
    } else {
      // columnWidth = "100%";
    }
  }

  useEffect(() => {
    get("/users/mehditeymorian/repos").then(res => {
      setRepos(
        res?.sort((a, b) => b.stargazers_count - a.stargazers_count)
      );
    });
  }, []);

  if (loading) return (
      <PageSlideFade>
      <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={4} w={'85vw'}>
        <CardSkeleton />
      </SimpleGrid>
      </PageSlideFade>

  );

  return (
    <PageSlideFade>
        <Box mt={4} w={'85vw'}>
          <StackGrid columnWidth={!isLargerThan982 && !isLargerThan720 ? '100%' : columnWidth}>
            {repos?.map((repo, index) => (
              <RepositoryCard
                key={index}
                title={repo.name}
                description={repo.description}
                language={repo.language}
                url={repo.svn_url}
                // created_at={repo.created_at}
                stargazers_count={repo.stargazers_count}
                forks_count={repo.forks_count}
              />
            ))}
          </StackGrid>
        </Box>
    </PageSlideFade>
  );
};

export default LiveData;
