import { type FormEvent, useRef } from "react";

interface NewGoalProps {
    onAdd: (text: string, summary: string) => void;
}

export default function NewGoal ( {onAdd} : NewGoalProps) {
    const goalRef = useRef<HTMLInputElement>(null);
    const summaryRef = useRef<HTMLInputElement>(null);

    function handleSumbit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const enteredGoal = goalRef.current!.value;
        const enteredSummary = summaryRef.current!.value;

        onAdd(enteredGoal, enteredSummary);

        goalRef.current!.value = '';
        summaryRef.current!.value = '';
    }

    return <form onSubmit={handleSumbit}>
        <p>
            <label htmlFor="goal">Your goal</label>
            <input id="goal" type="text" ref={goalRef}/>
        </p>
        <p>
            <label htmlFor="summary">Short Summary</label>
            <input id="summary" type="text" ref={summaryRef}/>
        </p>
        <p>
            <button>Add Goal</button>
        </p>
    </form>
}