console.log("storage here");

const storage = window.localStorage;

const KSJ_PERSONAL_TODO_LOCALSTORAGE_KEY = "KSJ_PERSONAL_TODO_LOCALSTORAGE_KEY";

const setLocalStorage = (value) => {
  try {
    storage.setItem(KSJ_PERSONAL_TODO_LOCALSTORAGE_KEY, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};

const getLocalStorage = () => {
  try {
    const storedValue = storage.getItem(KSJ_PERSONAL_TODO_LOCALSTORAGE_KEY);
    if (storedValue) {
      return JSON.parse(storedValue);
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};
