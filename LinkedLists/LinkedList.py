class Node:
    def __init__(self, value, next):
        self.value = value
        self.next = next


linked_list = Node(1, None)
print(linked_list.next)
