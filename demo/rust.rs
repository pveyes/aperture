extern crate termion;

use std::collections::HashMap;
use std::io::{stdin, stdout, StdinLock, StdoutLock, Write};
use termion::input::TermRead;

pub struct Question<'a> {
    pub name: &'a str,
    pub message: &'a str,
    // TODO handle optional question
    // pub required: bool
}

pub fn ask(questions: &[Question]) -> HashMap<String, String> {
    let input = stdin();
    let mut s_in = input.lock();
    let output = stdout();
    let mut s_out = output.lock();

    let mut answers = HashMap::new();

    for q in questions.iter() {
        let answer = ask_question(&mut s_out, &mut s_in, &q);
        answers.insert(q.name.to_string(), answer);
        s_out.write_all(reset().as_bytes()).unwrap();
    }

    answers
}
