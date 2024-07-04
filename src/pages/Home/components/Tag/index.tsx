import { TagContainer } from "./styles";

export interface TagProps {
  name: string;
  id: number;
}

export function Tag({ name }: TagProps) {
  return (
    <TagContainer>
      <span>{name}</span>
    </TagContainer>
  );
}
