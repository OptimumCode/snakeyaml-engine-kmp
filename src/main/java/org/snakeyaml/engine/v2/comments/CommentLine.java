/*
 * Copyright (c) 2018, http://www.snakeyaml.org
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.snakeyaml.engine.v2.comments;


import org.snakeyaml.engine.v2.events.CommentEvent;
import org.snakeyaml.engine.v2.exceptions.Mark;

import java.util.Optional;

/**
 * A comment line. May be a block comment, blank line, or inline comment.
 */
public class CommentLine {
    private final Optional<Mark> startMark;
    private final Optional<Mark> endMark;
    private final String value;
    private final CommentType commentType;

    public CommentLine(CommentEvent event) {
        this(event.getStartMark(), event.getEndMark(), event.getValue(), event.getCommentType());
    }

    public CommentLine(Optional<Mark> startMark, Optional<Mark> endMark, String value, CommentType commentType) {
        this.startMark = startMark;
        this.endMark = endMark;
        this.value = value;
        this.commentType = commentType;
    }

    /**
     * CommentLine is only equal to itself
     */
    @Override
    public final boolean equals(Object obj) {
        return super.equals(obj);
    }

    @Override
    public final int hashCode() {
        return super.hashCode();
    }

    public Optional<Mark> getEndMark() {
        return endMark;
    }

    public Optional<Mark> getStartMark() {
        return startMark;
    }

    /**
     * Is this comment blank lines or a regular comment (starts with '#').
     *
     * @return <code>true</code> if blank lines; Otherwise, <code>false</code>.
     */
    public boolean isBlankLines() {
        return commentType == CommentType.BLANK_LINE;
    }

    public CommentType getCommentType() {
        return commentType;
    }

    /**
     * Value of this comment.
     *
     * @return comment's value.
     */
    public String getValue() {
        return value;
    }

    public String toString() {
        return "<" + this.getClass().getName() + " (type=" + getCommentType() + ", value=" + getValue() + ")>";
    }
}
