import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { deleteContact, getContacts, getContactsDetails } from "./api";

export function useContacts() {
  return useQuery({
    queryKey: ["Contacts", "list"],
    queryFn: getContacts,
  });
}

export function useContactDetails(id) {
  return useQuery({
    queryKey: ["Contacts", "Detail", id],
    queryFn: () => getContactsDetails(id),
  });
}

export function useDeleteContact(id) {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (id) => deleteContact(id),
    onSuccess: async (data, veriable) => {
      await queryClient.invalidateQueries({
        queryKey: ["Contacts", "Detail", veriable.id],
      }),
        await queryClient.invalidateQueries({ queryKey: ["Contacts", "List"] });
    },
  });
}

export function useAddContact() {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (datas) => deleteContact(datas),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["Contacts", "List"] });
    },
  });
}
