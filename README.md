# VSCode Enum Hover To Value

Shows Python `Enum` values when hovering over enum members (similar to JetBrains IDEs).

### Why?

If your project has a lot of enums, it can be annoying to go to the enum definition to see the value of the enum member.
 This extension shows the enum value in the hover popup without changing to the enum definition File.

### Usage

- Open any Python file that uses enums, e.g.
   ```python
   from enum import Enum

   class Color(Enum):
       RED = "red"
       GREEN = "green"
       BLUE = "blue"

   x = Color.RED
   ```
- Hover over `Color.RED`. The extension will show the enum value in a hover popup.
