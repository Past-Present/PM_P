import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Grid,
  IconButton,
} from "@mui/material";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

const BudgetPage = () => {
  const [totalBudget, setTotalBudget] = useState(100000);
  const [tasks, setTasks] = useState([
    {
      name: "音樂",
      budget: 1000,
      items: [
        { label: "難度1", price: 100, quantity: 0 },
      ],
    },
    {
      name: "構圖",
      budget: 3000,
      items: [
        { label: "難度1", price: 100, quantity: 0 },
      ],
    },
  ]);

  const calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const calculateRemainingBudget = () => {
    return tasks.reduce((sum, task) => sum + calculateTotal(task.items), 0);
  };

  const handleAddTask = () => {
    setTasks([
      {
        name: "新項目",
        budget: 0,
        items: [
          { label: "難度1", price: 100, quantity: 0 },
        ],
      },
      ...tasks,
    ]);
  };

  const handleTaskNameChange = (index, newName) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].name = newName;
    setTasks(updatedTasks);
  };

  const handleTaskBudgetChange = (index, newBudget) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].budget = Number(newBudget);
    setTasks(updatedTasks);
  };

  const handleAddItem = (taskIndex) => {
    const updatedTasks = [...tasks];
    const currentItems = updatedTasks[taskIndex].items;
    if (currentItems.length < 10) {
      const nextDifficulty = currentItems.length + 1;
      updatedTasks[taskIndex].items.push({
        label: `難度${nextDifficulty}`,
        price: 100 * nextDifficulty,
        quantity: 0,
      });
      setTasks(updatedTasks);
    }
  };

  const handleItemPriceChange = (taskIndex, itemIndex, newPrice) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].items[itemIndex].price = Number(newPrice);
    setTasks(updatedTasks);
  };

  return (
    <Box p={4}>
      <Box mb={4}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography>總預算</Typography>
          </Grid>
          <Grid item>
            <TextField
              type="number"
              value={totalBudget}
              onChange={(e) => setTotalBudget(Number(e.target.value))}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item>
            <Typography>當前預算: {calculateRemainingBudget()}</Typography>
          </Grid>
        </Grid>
      </Box>

      <Button variant="contained" onClick={handleAddTask}>
        + 新增工作項目
      </Button>

      {tasks.map((task, index) => (
        <Box key={index} mt={4}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={4}>
              <TextField
                value={task.name}
                onChange={(e) => handleTaskNameChange(index, e.target.value)}
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="number"
                value={task.budget}
                onChange={(e) => handleTaskBudgetChange(index, e.target.value)}
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
          <Typography>合計 {calculateTotal(task.items)}</Typography>
          {calculateTotal(task.items) > task.budget && (
            <Typography color="error">合計超支！</Typography>
          )}
          {task.items.map((item, i) => (
            <Grid container spacing={2} alignItems="center" key={i} mt={1}>
              <Grid item xs={4}>
                <Typography>{item.label}</Typography>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  type="number"
                  value={item.price}
                  onChange={(e) => handleItemPriceChange(index, i, e.target.value)}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  type="number"
                  value={item.quantity}
                  onChange={(e) => {
                    const updatedTasks = [...tasks];
                    updatedTasks[index].items[i].quantity = Number(e.target.value);
                    setTasks(updatedTasks);
                  }}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
          ))}
          {task.items.length < 10 && (
            <Button
              variant="text"
              onClick={() => handleAddItem(index)}
              sx={{ mt: 2 }}
            >
              + 新增報價項目
            </Button>
          )}
          <Divider sx={{ mt: 2 }} />
        </Box>
      ))}
    </Box>
  );
};

export default BudgetPage;
