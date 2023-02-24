import { Button, Td, Tr, Image } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
const Tablecard = ({
  _id,
  ind,
  image,
  name,
  flavour,
  stock,
  category,
  discount,
  price,
  mrp,
  handleDelete,
  handleOpen,
}) => {
  return (
    <Tr key={_id} style={ind%2===0?{backgroundColor:"#00B8B9"}:{backgroundColor:"white"}} >
      <Td>{ind + 1}</Td>

      <Td>
        <Image
          src={image[0]}
          alt={name}
          borderRadius={5}
          ring={3}
          ringColor={"#025D84"}
        />
      </Td>
      <Td>{name}</Td>
      <Td>{flavour}</Td>
      <Td>{category}</Td>
      <Td textDecoration={"line-through"}>₹ {mrp}</Td>
      <Td>{price}</Td>
      <Td>`${discount}%`</Td>
      <Td>{stock}</Td>
      <Td>
        <Button
          bg={"#72749B"}
          color={"white"}
          _hover={{ color: "black", backgroundColor: "gray.200" }}
          onClick={() => handleOpen(_id)}
        >
          <EditIcon />
        </Button>
      </Td>
      <Td>
        <Button
          bg={"#72749B"}
          color={"white"}
          _hover={{ color: "black", backgroundColor: "gray.200" }}
          onClick={() => handleDelete(_id)}
        >
          <DeleteIcon />
        </Button>
      </Td>
    </Tr>
  );
};

export default Tablecard;
