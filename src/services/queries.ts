import { useQueries, useQuery } from "@tanstack/react-query";
import { getTodo, getTodoIds } from "./api";

export function useTodosIds() {
  return useQuery({
    queryKey: ["todo"],
    queryFn: getTodoIds,
  });
}

export function useTodos(ids: (number | undefined)[] | undefined) {
  return useQueries({
    queries: (ids ?? []).map((id) => {
      return {
        queryKey: ["todo", id],
        queryFn: ()=>getTodo(id!),
      };
    }),
  });
}
