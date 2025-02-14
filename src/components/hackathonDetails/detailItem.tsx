import { HStack, Text } from "@chakra-ui/react"

export default function DetailItem({ icon, text }:{icon:any, text:string}) {
    return (
        <HStack>
            {icon}
            <Text fontWeight={"light"}>{text}</Text>
        </HStack>
    )
}