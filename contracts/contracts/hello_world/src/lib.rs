// // #![no_std]
// // use soroban_sdk::{contracttype, contract, contractimpl, symbol_short, vec, Env, Symbol, Vec, String};


// // #[contracttype]
// // #[derive(Clone)]
// // pub struct Habit {
// //     pub unique_id: u64,
// //     pub title: String,
// //     pub expired: bool,
// //     pub staked_amout: u64,
// //     pub start_timestamp: u32,
// //     pub end_time: u32
// // }

// // const HABIT : Symbol = symbol_short!("HABIT");

// // #[contracttype] 
// // pub enum Habitbook { 
// //     Habit(u64)
// // }

// // #[contract]
// // pub struct CreateHabit;

// // #[contractimpl]
// // impl CreateHabit {
// //     pub fn create_habit(env: Env) -> bool{
// //         let mut habit: u64 = env.storage().instance().get(&HABIT).unwrap_or(0);
// //         habit +=1;

// //         true
// //     }

// //     pub fn view_my_habit(env: Env, unique_id: u64) -> Habit {
// //         let key = Habitbook::Habit(unique_id.clone());

// //         env.storage().instance().get(&key).unwrap_or(Habit {
// //             unique_id: 0,
// //             title: String::from_str(&env, "Not_Found"),\
// //             expired: true,
// //             staked_amout: 0,
// //             start_timestamp: 0,
// //             end_time: 0,
// //         })
// //     }
// // }



// #![allow(non_snake_case)]
// #![no_std]

// use soroban_sdk::{contract, contracttype, contractimpl, log, Env, Symbol, String, symbol_short};

// #[contracttype]
// #[derive(Clone)]
// pub struct Habit {
//     pub unique_id: u32,
//     pub title: String,
//     pub expired: bool,
//     pub staked_amount: u32,
//     pub start_timestamp: u32,
//     pub end_time: u32,
//     pub commit: u32,
//     pub loc: u32
// }

// const HABIT : Symbol = symbol_short!("HABIT");

// #[contracttype] 
// pub enum Habitbook { 
//     Habit(u32)
// }

// #[contract]
// pub struct CreateHabit;

// #[contractimpl]
// impl CreateHabit {
//     // Function to create a new habit
//     pub fn create_habit(env: Env, title: String, staked_amount: u32, start_timestamp: u32, end_time: u32, commit: u32, loc: u32) -> u32 {
//         // Generate a unique habit ID
//         let mut habit_id: u32 = env.storage().instance().get(&HABIT).unwrap_or(0);
//         habit_id += 1;
        
//         // Create an instance of the Habit struct
//         let new_habit = Habit {
//             unique_id: habit_id,
//             title: title.clone(),
//             expired: false,
//             staked_amount,
//             start_timestamp,
//             end_time,
//             commit,
//             loc
//         };
        
//         // Store the new habit in the contract's state
//         env.storage().instance().set(&Habitbook::Habit(habit_id), &new_habit);
        
//         // Update the habit count
//         env.storage().instance().set(&HABIT, &habit_id);
//         let _key = Habitbook::Habit(habit_id.clone());

//         log!(&env, "Habit created with ID: {}", habit_id);
//         habit_id // Return the unique ID of the newly created habit
//     }

//     // Function to retrieve a habit by its unique ID
//     pub fn view_habit(env: Env, unique_id: u32) -> Habit {
//         let key = Habitbook::Habit(unique_id.clone());
//         env.storage().instance().get(&key).unwrap_or(Habit {
//             unique_id: 0,
//             title: String::from_str(&env, "Not Found"),
//             expired: true,
//             staked_amount: 0,
//             start_timestamp: 0,
//             end_time: 0,
//             commit: 0,
//             loc: 0
//         })
//     }

//     // Function to expire a habit by its unique ID
//     pub fn expire_habit(env: Env, unique_id: u32) {
//         let key = Habitbook::Habit(unique_id.clone());
//         let mut habit = env.storage().instance().get(&key).unwrap_or(Habit {
//             unique_id: 0,
//             title: String::from_str(&env, "Not Found"),
//             expired: true,
//             staked_amount: 0,
//             start_timestamp: 0,
//             end_time: 0,
//             commit: 0,
//             loc: 0
//         });

//         if habit.unique_id != 0 && !habit.expired {
//             habit.expired = true;
//             env.storage().instance().set(&key, &habit);
//             log!(&env, "Habit ID: {} has been expired", unique_id);
//         } else {
//             log!(&env, "Habit not found or already expired");
//             panic!("Habit not found or already expired");
//         }
//     }

//     pub fn view_staked_amt(env: Env, habit_unique_id: u32) -> u32 {
//         let amt = Self::view_habit(env.clone(), habit_unique_id.clone());
//         amt.staked_amount
//     }

//     // pub fn daily_check_in(env: Env, habit_unique_id: u32) -> bool {
//     //     let habit
//     // }
// }

#![allow(non_snake_case)]
#![no_std]

use soroban_sdk::{contract, contracttype, contractimpl, log, Env, Symbol, String, symbol_short};

#[contracttype]
#[derive(Clone)]
pub struct Habit {
    pub unique_id: u32,
    pub title: String,
    pub expired: bool,
    pub staked_amount: u32,
    pub start_timestamp: u64,
    pub end_timestamp: u64,
    pub commit: u32,
    pub loc: u32,
    pub claimable_balance: u32, // New field for claimable balance
}

const HABIT: Symbol = symbol_short!("HABIT");

#[contracttype]
pub enum Habitbook {
    Habit(u32),
}

#[contract]
pub struct CreateHabit;

#[contractimpl]
impl CreateHabit {
    // Function to create a new habit
    pub fn create_habit(
        env: Env,
        title: String,
        staked_amount: u32,
        start_timestamp: u64,
        end_timestamp: u64,
        commit: u32,
        loc: u32,
    ) -> u32 {
        // Generate a unique habit ID
        let mut habit_id: u32 = env.storage().instance().get(&HABIT).unwrap_or(0);
        habit_id += 1;

        // Create an instance of the Habit struct
        let new_habit = Habit {
            unique_id: habit_id,
            title: title.clone(),
            expired: false,
            staked_amount,
            start_timestamp,
            end_timestamp,
            commit,
            loc,
            claimable_balance: 0, // Initialize claimable balance to zero
        };

        // Store the new habit in the contract's state
        env.storage().instance().set(&Habitbook::Habit(habit_id), &new_habit);

        // Update the habit count
        env.storage().instance().set(&HABIT, &habit_id);

        log!(&env, "Habit created with ID: {}", habit_id);
        habit_id // Return the unique ID of the newly created habit
    }

    // Function to retrieve a habit by its unique ID
    pub fn view_habit(env: Env, unique_id: u32) -> Habit {
        let key = Habitbook::Habit(unique_id);
        env.storage().instance().get(&key).unwrap_or(Habit {
            unique_id: 0,
            title: String::from_str(&env, "Not Found"),
            expired: true,
            staked_amount: 0,
            start_timestamp: 0,
            end_timestamp: 0,
            commit: 0,
            loc: 0,
            claimable_balance: 0, // Ensure all fields are initialized
        })
    }

    // Function to release staked funds gradually
    pub fn release_funds(env: Env, unique_id: u32, goals_met: bool) {
    let key = Habitbook::Habit(unique_id);
    let mut habit = env.storage().instance().get(&key).unwrap_or(Habit {
        unique_id: 0,
        title: String::from_str(&env, "Not Found"),
        expired: true,
        staked_amount: 0,
        start_timestamp: 0,
        end_timestamp: 0,
        commit: 0,
        loc: 0,
        claimable_balance: 0, // Ensure all fields are initialized
    });

    if habit.unique_id == 0 || habit.expired {
        log!(&env, "Habit not found or already expired");
        panic!("Habit not found or already expired");
    }

    let current_time = env.ledger().timestamp(); // Get the current timestamp
    if current_time > habit.end_timestamp {
        log!(&env, "The habit period has ended.");
        return;
    }

    let total_duration = habit.end_timestamp - habit.start_timestamp;
    let elapsed_time = current_time - habit.start_timestamp;
    let percentage_completed = elapsed_time as f64 / total_duration as f64;

    if goals_met {
        let total_staked = habit.staked_amount;
        let release_amount = (total_staked as f64 * percentage_completed) as u32;

        // Update claimable_balance to add released funds
        habit.claimable_balance += release_amount;

        // Update the habit in storage only for claimable_balance
        env.storage().instance().set(&key, &habit.claimable_balance);

        // Log the release amount (for demonstration)
        log!(&env, "Releasing {} tokens for Habit ID: {}", release_amount, habit.unique_id);
    } else {
        log!(&env, "Goals not met for Habit ID: {}", habit.unique_id);
    }
}


    // Function to view staked amount of a habit
    pub fn view_staked_amt(env: Env, habit_unique_id: u32) -> u32 {
        let habit = Self::view_habit(env.clone(), habit_unique_id);
        habit.staked_amount
    }

    // Future To-Dos:
    // - Deduct staked amount
    // - Implement a vector of bool type for tracking goals
    // - Implement withdrawal or claimable balance logic
}
