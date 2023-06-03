import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
  Link,
  Heading,
} from "@chakra-ui/react";
import useGeneras, { Genera } from "../hooks/useGeneras";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genera) => void;
  selectedGenre: Genera | null;
}
const GeneraList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading } = useGeneras();
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genera) => (
          <ListItem key={genera.id} paddingY="10px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genera.image_background)}
              ></Image>
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genera.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                onClick={() => onSelectGenre(genera)}
              >
                {genera.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GeneraList;
