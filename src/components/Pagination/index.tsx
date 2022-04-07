import { Text, View } from "react-native";
import { PaginationItem } from "../PaginationItem";
import { styles } from "./styles";

interface Props {
  numberPages: number;
  currentPage: number;
  onChangePage: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from - index + 1;
    })
    .filter(page => page > 0)
}

export function Pagination({ numberPages, currentPage, onChangePage }: Props) {
  const lastPage = numberPages;

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : [];

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <View style={styles.container}>
      {currentPage > (1 + siblingsCount) && (
        <>
          <PaginationItem number={1} onChangePage={onChangePage} />
          {currentPage > (2 + siblingsCount) && <Text style={styles.points}>...</Text>}
        </>
      )}

      {previousPages.length > 0 && previousPages.map(page => (
        <PaginationItem key={page} number={page} onChangePage={onChangePage} />
      ))}

      <PaginationItem number={currentPage} isCurrent onChangePage={onChangePage} />

      {nextPages.length > 0 && nextPages.map(page => (
        <PaginationItem key={page} number={page} onChangePage={onChangePage} />
      ))}

      {(currentPage + siblingsCount) < lastPage && (
        <>
          {(currentPage + 1 + siblingsCount) < lastPage && <Text style={styles.points}>...</Text>}
          <PaginationItem number={lastPage} onChangePage={onChangePage} />
        </>
      )}
    </View>
  );
}